JWT Authentication with Node & Express. Demonstrated usage of Authentication tokens and Refresh tokens. Two different servers are used. One one them specifically handles the logging in, logging out, and re-generation of Auth tokens once they have expired using the concept of a 'refresh' token. This also means that we can scale the authentication server separately from our main API server.

I'm leaving in the 'secret' keys in the .env file for demonstration purposes. Obviously, these should not be committed in production code.

Based on an example given by Web Dev Simplified.
