const { createClient } = require('@supabase/supabase-js');
const { BASE_URL, API_KEY } = require('./src/globals/globals');
const supabase = createClient("https://sevsvtbsdrwwyuvfujvg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNldnN2dGJzZHJ3d3l1dmZ1anZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNzE2NDMsImV4cCI6MjA2Mjg0NzY0M30.Fox-pD269Q1H-nP4d6WoNy-qcXyrn4yv1oYz_MslWT0");

module.exports = {
    supabase
}