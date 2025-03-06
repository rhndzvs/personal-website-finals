-- SQL script to create feedback table in Supabase

-- Enable the UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create the feedback table
CREATE TABLE feedback (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to view feedback
CREATE POLICY "Feedback is viewable by everyone" 
ON feedback FOR SELECT 
USING (true);

-- Create policy to allow anyone to insert feedback
CREATE POLICY "Anyone can add feedback" 
ON feedback FOR INSERT 
WITH CHECK (true);

-- Enable realtime for this table
ALTER PUBLICATION supabase_realtime ADD TABLE feedback;

-- Add comment to describe the table
COMMENT ON TABLE feedback IS 'Stores user feedback and comments with real-time capabilities'; 