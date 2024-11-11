const transporter = require("../Utils/mailTransporter");

const sendMail = async (req, res) => {
    try {
        console.log(req.body);

        // Dynamically create HTML table rows for each key-value pair in req.body
        let emailContent = `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2 style="color: #4CAF50;">New Query Received</h2>
                <p style="font-size: 16px;">You have received a new query with the following details:</p>
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        `;

        // Loop through req.body to add each key-value pair as a table row
        for (const [key, value] of Object.entries(req.body)) {
            emailContent += `
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">${key}:</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${value}</td>
                </tr>
            `;
        }

        // Close the table and add a footer
        emailContent += `
                </table>
                <p style="font-size: 14px; color: #777; margin-top: 20px;">Thank you for using our service.</p>
            </div>
        `;

        const senddatainMail = {
            from: req.body.email || "no-reply@example.com",  // Default to 'no-reply' if no email is provided
            to: "pathway2happiness@gmail.com", // Recipient email
            subject: "New Query Received Successfully!",
            html: emailContent          // Use HTML content
        };

        transporter.sendMail(senddatainMail, (error) => {
            if (error) {
                console.log(error);
                return res.status(401).json({ success: false, message: "Invalid Email Address" });
            } else {
                res.status(200).json({
                    success: true,
                    message: "Your Query Sent Successfully",
                });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};


module.exports = {
    sendMail
};
