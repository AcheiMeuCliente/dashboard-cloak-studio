
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Monitor } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard Seguro</h1>
          <p className="text-xl text-gray-600">Acesse seus painéis Looker Studio de forma protegida</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Smartphone className="h-12 w-12 text-blue-600" />
              </div>
              <CardTitle>Versão Mobile</CardTitle>
              <CardDescription>
                Otimizada para smartphones e tablets (Android/iOS)
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link to="/dashboard/mobile">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Acessar Dashboard Mobile
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Monitor className="h-12 w-12 text-green-600" />
              </div>
              <CardTitle>Versão Desktop</CardTitle>
              <CardDescription>
                Otimizada para computadores (Windows/Mac)
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link to="/dashboard/desktop">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Acessar Dashboard Desktop
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            ⚡ Carregamento otimizado • 🔒 Links protegidos • 📱 Multi-dispositivo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
