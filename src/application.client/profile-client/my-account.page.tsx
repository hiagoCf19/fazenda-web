import { Edit2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../shadcn/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../../shadcn/ui/card";
import { HeaderAuthenticaded } from "../_components/header-authenticated.component";
import NotFound from "../../common/not-found.page";
import { useSession } from "../context/session.context";
import { MyAccountFormComponent } from "./_components/my-account.form.component";
import { generateFallback } from "../../helpers/create-fallback.helper";
import BottomNav from "../../common/_components/bottom-navigator-mobile.component";

export function MyAccountPage() {
  const { session } = useSession();
  if (!session) return <NotFound />;
  return (
    <section className="md:p-12 overflow-x-hidden relative min-h-screen ">
      <HeaderAuthenticaded session={session} />
      <div className="w-full md:h-[128px] h-[88px]" />

      <Card className="md:w-full w-[95%] max-w-md mx-auto shadow-lg min-h-[50vh]">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-medium text-secondary-foreground">
            Minha conta
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-center relative">
            <div className="flex items-center justify-center size-40  relative">
              <Avatar className="size-40 ">
                <AvatarImage
                  className="object-cover"
                  src={session?.user.photo}
                />
                <AvatarFallback className="bg-[#fe6e009e] text-secondary-foreground text-4xl size-38">
                  {generateFallback(session?.user)}
                </AvatarFallback>
              </Avatar>
              <div className="rounded-full bg-secondary p-2 absolute top-2 right-0 ">
                <Edit2 className="text-secondary-foreground" />
              </div>
            </div>
          </div>
          <div>
            <MyAccountFormComponent session={session} />
          </div>
        </CardContent>
      </Card>
      <BottomNav />
    </section>
  );
}
