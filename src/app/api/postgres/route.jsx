import { Pool } from "pg";

// Create a new pool for PostgreSQL connection
const pool = new Pool({
    host: process.env.NEXT_PUBLIC_DB_HOST,      // Database host
    port: process.env.NEXT_PUBLIC_DB_PORT,      // Database port
    user: process.env.NEXT_PUBLIC_DB_USER,      // Database username
    password: process.env.NEXT_PUBLIC_DB_PASSWORD,  // Database password
    database: process.env.NEXT_PUBLIC_DB_DATABASE,  // Database name
});

// Handle GET requests to this API route
export async function GET(req, res) {
    try {
        const result = await pool.query('SELECT * FROM users');
        return new Response(JSON.stringify(result.rows), { status: 200 });
    } catch (error) {
        console.error("Error fetching users:", error);
        return new Response(
            JSON.stringify({ error: 'Failed to fetch users', details: error.message }),
            { status: 500 }
        );
    }
}
