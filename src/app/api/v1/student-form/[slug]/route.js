export async function GET(req, { params }) {
    console.log("slug   ----------", params.slug);

    if (params.slug === "form.js") {
        try {
            const data = await fetch("https://lms.ntechzy.in/api/v1/student-form/form.js");
            const response = await data.text();
            console.log(response, "Res");

            return new Response(response, {
                status: 200,
                headers: {
                    'Content-Type': 'application/javascript',
                    'Cache-Control': 'public, max-age=31536000',
                      'Access-Control-Allow-Origin': '*', 
                    'Access-Control-Allow-Methods': 'GET, OPTIONS', 
                },
            });
        } catch (error) {
            console.error(error);
            return new Response("Failed to fetch data from external API", {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            });
        }
    }

    return new Response("Not Found", {
        status: 404,
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=31536000',
            'Access-Control-Allow-Origin': '*',
        },
    });
}
