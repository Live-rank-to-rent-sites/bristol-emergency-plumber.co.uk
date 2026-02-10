CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT,
  message TEXT,
  source_page TEXT,
  ip_hash TEXT,
  user_agent TEXT,
  status TEXT NOT NULL DEFAULT 'new'
);
