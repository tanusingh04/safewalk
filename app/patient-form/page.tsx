export default function PatientFormPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Patient Details Form</h1>
            <p className="text-lg text-gray-600">
              Please fill out this form to provide essential medical information for emergency responders
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf8xQzVvQzVvQzVvQzVvQzVvQzVvQzVvQzVvQzVvQzVvQzVvQ/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Patient Details Form"
              className="w-full"
            >
              Loading patient form...
            </iframe>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              This form is secure and HIPAA-compliant. Your information will only be shared with authorized emergency
              responders when needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
