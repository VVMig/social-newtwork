import React from 'react';
import { Body } from './Body';
import { Header } from './Header';
import { StatisticsProps } from './interfaces';

export const Info = ({ stats }: StatisticsProps) => {
  return (
    <>
      <Header />
      <Body stats={stats} />
    </>
  );
};
