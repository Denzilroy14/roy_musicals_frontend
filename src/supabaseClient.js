/* supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qrwmuexevdepbjxeyfkq.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyd211ZXhldmRlcGJqeGV5ZmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2NjAxMzYsImV4cCI6MjA3MDIzNjEzNn0.MCe6mBRzpbTkaiO7K1xsLDBA2Jlmc08cMcTeRXzQ928'; // Replace with your anon key
export const supabase = createClient(supabaseUrl, supabaseKey)
*/
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://qrwmuexevdepbjxeyfkq.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyd211ZXhldmRlcGJqeGV5ZmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2NjAxMzYsImV4cCI6MjA3MDIzNjEzNn0.MCe6mBRzpbTkaiO7K1xsLDBA2Jlmc08cMcTeRXzQ928";
export const supabase = createClient(supabaseUrl, supabaseKey)