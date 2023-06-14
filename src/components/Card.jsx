import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div
      className="cursor-pointer sm:p-3
     sm:hover:shadow-slate-400 sm:shadow-md rounded-lg
     sm:border sm:border-slate-400 sm:m-2
     transition-shadow duration-300 group"
    >
      {/* {result.id} */}
      <Link href={`/movie/${result.id}`}>
        {/* Для корректной работы нужно внести изменения в next.config.js:gg12 18min */}
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          alt="Image is not available"
          className="sm:rounded-lg group-hover:opacity-60
          transition-opacity duration-300"
          //сохраняем ширину и высоту изображения :gg12 24min
          style={{ maxWidth: "100%", height: "auto" }}
          // как показать спиннер при загрузке картинки:
          placeholder="blur"
          blurDataURL="/spinner.svg"
        ></Image>
        <div className="p-2">
          {/* вместо truncate используем line-clamp-2 gg12 28 min*/}
          <p className="line-clamp-2 text-gray-600">{result.overview}</p>
          <h2 className="truncate text-lg font-bold text-green-400">
            {result.title || result.name}
          </h2>
          <p className="flex text-gray-600">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="ml-20 mr-1" /> {result.vote_count}
          </p>
          {/* убираем полосу прокрутки in globals.css gg12 39 min*/}
        </div>
      </Link>
    </div>
  );
}
