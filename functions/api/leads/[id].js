export async function onRequest({ request, env, params }) {
  if (request.method !== 'PATCH') {
    return new Response(JSON.stringify({ message: 'Method not allowed.' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const { id } = params;

  let payload;
  try {
    payload = await request.json();
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Invalid JSON payload.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const allowedStatuses = ['new', 'contacted', 'closed'];
  if (!payload.status || !allowedStatuses.includes(payload.status)) {
    return new Response(JSON.stringify({ message: 'Invalid status. Must be: new, contacted, or closed.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const result = await env.DB.prepare(
      'UPDATE leads SET status = ?1 WHERE id = ?2'
    ).bind(payload.status, id).run();

    if (result.meta.changes === 0) {
      return new Response(JSON.stringify({ message: 'Lead not found.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Unable to update lead.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
