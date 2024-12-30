import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-50 to-orange-100">
      <Card className="max-w-3xl p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800">Cookie Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            This website uses cookies to improve your browsing experience. Below is a detailed list of cookies we use:
          </p>
          <ul className="space-y-2 text-gray-600 list-disc list-inside">
            <li>
              <span className="font-semibold text-gray-800">Essential Cookies:</span> These cookies are necessary for the website to function and cannot be switched off.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Analytics Cookies:</span> These cookies help us understand how visitors interact with the website.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Marketing Cookies:</span> These cookies are used to deliver ads that are relevant to you.
            </li>
          </ul>
          <p className="mt-4 text-gray-600">
            You can withdraw your consent to cookies at any time by adjusting your browser settings or clicking the Decline button on our website.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
