

export default async function WebhookHelloController(request, response) {

    console.log("Received webhook request:", request.body);

    return response.status(HTTP_STATUS.SUCCESS).json({
        "message": "Received webhook request successfully!"
    });
};
