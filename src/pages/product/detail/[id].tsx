import React from 'react';
import axios from 'axios';

interface IProps {
  data: {
    body: string;
    title: string;
  };
}
export default function ProductDetail(props: IProps) {
  const { body, title } = props.data;

  return (
    <div>
      ProductDetail
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${context.query.id}`
  );
  return {
    props: {
      data,
    },
  };
}
