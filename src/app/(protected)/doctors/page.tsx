import { Plus } from "lucide-react";

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

const DoctorsPage = () => {
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
