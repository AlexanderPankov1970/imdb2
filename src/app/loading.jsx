import React from "react";
import Image from "next/image";
//Для получения изображения спиннера используем сайт loading.io!
export default function loading() {
  return (
    <div className="flex justify-center">
      <Image src="spinner.svg" alt="Loading..." width={100} height={100} />
    </div>
  );
}
