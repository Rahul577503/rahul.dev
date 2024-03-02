'use client'
import React from 'react';
import Example from '../../../blogs/learn-mdx.mdx';
import { CH } from "@code-hike/mdx/components";


const CodeHike: React.FC = () => {
  return (
    <Example components={{ CH }} />
  );
};

export default CodeHike;
