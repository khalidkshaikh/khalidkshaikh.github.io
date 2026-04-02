-- Create responses table for contact form submissions
CREATE TABLE IF NOT EXISTS responses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE responses ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for public form submissions)
CREATE POLICY "Allow public inserts" ON responses
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Allow authenticated users to read
CREATE POLICY "Allow authenticated reads" ON responses
  FOR SELECT TO authenticated
  USING (true);
