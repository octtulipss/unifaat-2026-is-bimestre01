

export default async function WebhookHelloController(request, response) {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const {event } = request.body; 
    if (event === "payment.approved") {
        console.log (`Evento recebido: ${event}`);}


    return response.status(HTTP_STATUS.SUCCESS).json({
        "message": "Received webhook request successfully!"
    });
};

