import React, { ReactElement } from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

interface Link {
  text: string, 
  url: string
}

interface Props {
  links: Link[]
}

const StyledIcon = styled.span`
  margin-left: 2rem;
`;

export default function Home({ links }: Props): ReactElement {
  let history = useHistory();

  // MAGIC: React will internally assign unique keys when using React.Children.toArray for mapping elements
  const renderLinks = () => (
    <>
      {React.Children.toArray(
        links.map(({ text, url }) => (
          <li>
            {text}
            <StyledIcon
              data-testid={text}
              onClick={() => history.push(`${url}`)}
              className="fas fa-link"
            />
          </li>
        ))
      )}
    </>
  );

  return (
    <div className="container">
      <h3 style={{ marginTop: '5rem' }}>Typescript React Examples</h3>
      <div style={{ marginTop: '5rem' }} className="row">
        <div className="column">
        <ol>{links && renderLinks()}</ol>
        </div>
      </div>
    </div>
  )
}