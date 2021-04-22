import React from 'react';
import { Body } from './Body';
import { Header } from './Header';
import { StatisticsProps } from '../interfaces';

interface Props extends StatisticsProps {
  name: string;
}

export const Info = ({ stats, name }: Props) => {
  return (
    <>
      <Header name={name} />
      <Body stats={stats} />
    </>
  );
};
