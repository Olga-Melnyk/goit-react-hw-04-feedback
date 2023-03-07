import PropTypes from 'prop-types';
import { SectionBox, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionBox>
      <Title>{title}</Title>
      <main>{children}</main>
    </SectionBox>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
