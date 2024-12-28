import { Button } from "@/components/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";

export function SidebarUpgradeIndicator() {
  return (
    <Card className="shadow-none">
      <CardHeader className="p-4 pb-0">
        <CardTitle className="text-sm">Upgrade your plan</CardTitle>
        <CardDescription>
          Upgrade to pro plan to experience the AI features
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2.5 p-4">
        <Button size="sm" className="hover:drop-shadow-2xl rounded-xl">
          Subscribe
        </Button>
      </CardContent>
    </Card>
  );
}
