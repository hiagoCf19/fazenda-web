import { ChevronLeft, Edit2 } from "lucide-react";
import { Button } from "../../shadcn/ui/button";
import { useNavigate } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "../../shadcn/ui/avatar";
import { useSession } from "../../application.client/context/session.context";
import { Card, CardContent, CardHeader, CardTitle } from "../../shadcn/ui/card";
import { generateFallback } from "../../helpers/create-fallback.helper";
import { FormUpdateProfile } from "./form/update-profile.form";

export function ProfileProducer() {
  const { session } = useSession();
  if (!session) return null;
  const navigate = useNavigate();
  return (
    <div className="mt-8">
      <header className="relative flex items-center">
        <Button
          size={"icon"}
          className="bg-transparent shadow-none shrink-0"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="text-orange size-6" />
        </Button>
        <h3 className=" text-zinc-700 font-bold absolute left-1/2 transform -translate-x-1/2">
          Atualizar dados
        </h3>
      </header>
      <Card className="w-full bg-transparent shadow-none  max-w-md mx-auto  min-h-[50vh]">
        <CardHeader className="text-center">
          <CardTitle hidden />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-center relative">
            <div className="flex items-center justify-center size-40  relative">
              <Avatar className="size-34 mb-8 ">
                <AvatarImage
                  className="object-cover"
                  src={session?.user.photo}
                />
                <AvatarFallback className="bg-[#fe6e009e] text-secondary-foreground text-4xl size-38">
                  {generateFallback(session?.user)}
                </AvatarFallback>
              </Avatar>
              <div className="rounded-full bg-secondary p-2 absolute top-2 right-3 ">
                <Edit2 className="text-secondary-foreground" />
              </div>
            </div>
          </div>

          <FormUpdateProfile session={session} />
        </CardContent>
      </Card>
    </div>
  );
}
