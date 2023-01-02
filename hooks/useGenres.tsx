"use client";
import { useEffect, useState } from "react";

import { API_GET_GENRES } from "../api/apiConstants";
import { Genre } from "../utils/types";

export default function useGenres(): Genre[] {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!JSON.parse(window.localStorage.getItem("genres")!)) {
        fetch(API_GET_GENRES)
          .then(async (res) => {
            const formattedRes = await res.json();
            window.localStorage.setItem("genres", JSON.stringify(formattedRes.genres));
            setGenres(formattedRes.genres);
          })
          .catch((err) => console.log(err));
      } else {
        setGenres(JSON.parse(window.localStorage.getItem("genres")!));
      }
    }
  }, []);

  return genres;
}
