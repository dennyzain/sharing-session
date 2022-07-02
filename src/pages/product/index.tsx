import Link from "next/link";
import React from "react";
import axios from "axios";

interface IProps {
  data: any[];
}

export default function index(props: IProps) {
  return (
    <div>
      <ul>
        {props.data.map((item: any) => {
          return (
            <Link key={item.id} href={`/product/detail/${item.id}`}>
              <p>{item.title}</p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const { data: data2 } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/2"
  );

  return {
    props: {
      data,
    },
  };
}
