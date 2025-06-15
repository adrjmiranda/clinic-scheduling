import { Plus } from "lucide-react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  PageActions,
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/ui/page-container";
import { auth } from "@/lib/auth";

const DoctorsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authentication");
  }

  if (!session?.user.clinic) {
    redirect("/clinic-form");
  }

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Dóctors</PageTitle>
          <PageDescription>Manager your doctors and clinics</PageDescription>
        </PageHeaderContent>

        <PageActions>
          <Button>
            <Plus /> Add doctor
          </Button>
        </PageActions>
      </PageHeader>

      <PageContent>
        <h2>Doctors</h2>
      </PageContent>
    </PageContainer>
  );
};

export default DoctorsPage;
