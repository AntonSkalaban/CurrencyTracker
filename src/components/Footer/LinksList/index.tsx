import { Link, LinkItem, ListTitle, StyledLinksList } from "./styled";

interface LinksListProps {
  title: string;
  links: [string, string][];
}
export const LinksList: React.FC<LinksListProps> = ({ title, links }) => {
  return (
    <StyledLinksList>
      <ListTitle> {title} </ListTitle>
      <ul>
        {links.map(([name, path]) => (
          <LinkItem key={name}>
            <Link href={path}>{name}</Link>
          </LinkItem>
        ))}
      </ul>
    </StyledLinksList>
  );
};
