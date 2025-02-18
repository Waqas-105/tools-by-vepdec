<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fake Email Sender</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      /* Glassmorphism style */
      .glass {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 15px;
      }
    </style>
  </head>
  <body class="min-h-screen bg-black flex items-center justify-center">
    <!-- Main Container -->
    <div class="w-11/12 max-w-6xl p-8 glass shadow-lg">
      <!-- Heading -->
       <h1 class="text-4xl font-bold text-center text-white">
        <span class="text-pink-500">VepDec</span> - Uniting Innovation, Security and Success.
      </h1>
      <h2 class="text-4xl font-bold text-center text-pink-500">
        Fake Email Sender
      </h2>
      <p class="mt-4 text-center text-white/70 text-lg">
        Test email delivery and analyze DMARC compliance with ease.
      </p>

      <!-- Form -->
      <form 
        method="post" 
        action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" 
        class="mt-6 space-y-4"
      >
        <!-- From Email -->
        <div>
          <label for="from_email" class="block text-sm font-medium text-white/70">
            From Email
          </label>
          <input 
            type="email" 
            id="from_email" 
            name="from_email" 
            required 
            class="w-full px-4 py-2 mt-1 text-black bg-white/50 border border-white/20 rounded-lg placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <!-- To Email -->
        <div>
          <label for="to_email" class="block text-sm font-medium text-white/70">
            To Email
          </label>
          <input 
            type="email" 
            id="to_email" 
            name="to_email" 
            value="vulnerabilitytesting11@gmail.com" 
            class="w-full px-4 py-2 mt-1 text-black bg-white/50 border border-white/20 rounded-lg placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <!-- Subject -->
        <div>
          <label for="subject" class="block text-sm font-medium text-white/70">
            Subject
          </label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            value="Verify Your Account Details" 
            class="w-full px-4 py-2 mt-1 text-black bg-white/50 border border-white/20 rounded-lg placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <!-- Message -->
        <div>
          <label for="message" class="block text-sm font-medium text-white/70">
            Message
          </label>
          <textarea 
            id="message" 
            name="message"
            class="w-full h-40 px-4 py-2 mt-1 text-black bg-white/50 border border-white/20 rounded-lg placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
Dear Customer,

We have detected unusual activity on your account. To ensure your account's security and functionality, we kindly request that you verify your information at the earliest.

Please provide the necessary details to ensure there is no disruption to your service.

Next Steps:
- Click the secure verification link in the email.
- Follow the prompts to validate your account information.
- Contact support if you encounter any issues.

Thank you for your prompt attention to this matter.

Best regards,
Support Team
          </textarea>
        </div>


        <!-- Submit Button -->
        <div class="flex justify-center">
          <input 
            type="submit" 
            value="Send" 
            class="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          />
        </div>
      </form>
      
    <!-- PHP Email Handling -->
  <?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $from_email = $_POST["from_email"];
    $to_email = $_POST["to_email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Ensure the message is not empty
    if (empty($message)) {
        echo "<p class='text-center text-red-500 mt-4'>Message cannot be empty.</p>";
        exit;
    }

    // Prepare the email headers
    $headers = "From: $from_email" . "\r\n" .
               "Reply-To: $from_email" . "\r\n" .
               "Return-Path: $from_email" . "\r\n" .
               "MIME-Version: 1.0" . "\r\n" .
               "Content-type: text/plain; charset=UTF-8" . "\r\n" . // Change to text/html if sending HTML
               "X-Mailer: PHP/" . phpversion();

    // Send the email
    if (mail($to_email, $subject, $message, $headers)) {
        echo "<p class='text-center text-green-500 mt-4'>Email sent successfully!</p>";
    } else {
        echo "<p class='text-center text-red-500 mt-4'>Error sending email.</p>";
    }
}
?>
  </body>
</html>

