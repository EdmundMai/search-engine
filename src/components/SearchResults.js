import React from "react";
import styled from "styled-components";

const TableHeader = styled.th`
  min-width: 200px;
`;

const SearchResults = ({ results }) => (
  <table>
    <thead>
      <tr>
        <TableHeader>Name</TableHeader>
        <TableHeader>Description</TableHeader>
        <TableHeader>Image</TableHeader>
      </tr>
    </thead>
    <tbody>
      {results.map(({ id, name, description, imageUrl }) => (
        <tr key={id}>
          <td dangerouslySetInnerHTML={{ __html: name }} />
          <td dangerouslySetInnerHTML={{ __html: description }} />
          <td>{imageUrl && <img src={imageUrl} alt={description} />}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default SearchResults;
