import { useForm } from "react-hook-form";

import { producerDocumentsSchema } from "../../zod/producer/create-producer.schema";

import { FileInput } from "../../common/_components/input-file.component";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button } from "../../shadcn/ui/button";
import { Loader } from "lucide-react";
import { useUploadDocuments } from "../../hooks/producer.hook";

export function UploadDocumentsPage() {
  const { mutate: uploadDocuments, isPending } = useUploadDocuments();
  const navigate = useNavigate();
  const { userId } = useParams();

  const [formFiles, setFormFiles] = useState({
    nif: null,
    business_license: null,
    diario_rep: null,
    mei_representative: null,
    commercial_certificate: null,
  });
  const {
    formState: { errors },
  } = useForm<any>({
    resolver: zodResolver(producerDocumentsSchema),
    mode: "onSubmit",
  });
  const handleFileChange = (name: string, file: File | null) => {
    setFormFiles((prev) => ({ ...prev, [name]: file }));
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!userId) {
      alert("UserId not found!");
      return;
    }
    const formData = new FormData();
    // Adiciona o userId como campo separado
    formData.append("userId", userId);
    // Adiciona os arquivos
    Object.entries(formFiles).forEach(([key, file]) => {
      if (file) {
        formData.append(key, file);
      }
    });

    uploadDocuments(
      { data: formData, userId: Number(userId) },
      {
        onSuccess: () => {
          navigate(`/`);
        },
        onError: (error: any) => {
          console.error(error);
        },
      }
    );
  };

  return (
    <div>
      <h2 className="text-3xl text-secondary-foreground text-center font-semibold">
        Falta pouco para terminar.
      </h2>

      <div className="mt-4 w-full mx-auto flex flex-col gap-2 px-2">
        <div className="w-full mx-auto min-h-16 md:space-y-3">
          <form className="relative space-y-4 " onSubmit={handleSubmit}>
            <FileInput
              label="NIF"
              name="nif"
              error={errors.nif?.message}
              value={formFiles.nif}
              onChange={(file) => handleFileChange("nif", file)}
            />
            <FileInput
              label="Alvará comercial"
              name="business_license"
              error={errors.business_license?.message}
              value={formFiles.business_license}
              onChange={(file) => handleFileChange("business_license", file)}
            />
            <FileInput
              label="Diário da República"
              name="diario_rep"
              error={errors.diario_rep?.message}
              value={formFiles.diario_rep}
              onChange={(file) => handleFileChange("diario_rep", file)}
            />

            <FileInput
              label="MEI do responsável"
              name="mei_representative"
              error={errors.mei_representative?.message}
              value={formFiles.mei_representative}
              onChange={(file) => handleFileChange("mei_representative", file)}
            />
            <FileInput
              label="Aertidão comercial"
              name="commercial_certificate"
              error={errors.commercial_certificate?.message}
              value={formFiles.commercial_certificate}
              onChange={(file) =>
                handleFileChange("commercial_certificate", file)
              }
            />
            {isPending ? (
              <Loader className="text-primary my-4 animate-spin size-8" />
            ) : (
              <Button
                type="submit"
                className="bg-secondary rounded-3xl h-[48px] text-secondary-foreground w-full"
              >
                Finalizar
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
