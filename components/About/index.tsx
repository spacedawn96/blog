import { css } from '@emotion/react';

const AboutBlock = css({});

const AboutMain = css({
  fontSize: '1.25rem',
  lineHeight: '2.215rem',
  fontFamily: '"Aeonik-Light","Helvetica","Arial",sans-serif',
  whiteSpace: 'initial',
  width: '50%',
  div: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const AboutTitle = css({
  color: '#292929',
  fontFamily: '"Rubik", "sans-serif"',
  fontSize: '7rem',
  animationDelay: '.2s',
  animationDuration: '.8s',
  animationName: 'bottomToTop',
  animationFillMode: 'both',
  animationTimingFunction: 'ease',
  marginBottom: '4rem',
});

export default function About() {
  return (
    <div css={AboutBlock}>
      <h1 css={AboutTitle}>about</h1>
      <pre css={AboutMain}>
        <div>
          Upon graduating with honors from the Art Center College of Design, Eric Robison
          began his career as an artist when he was hired by Walt Disney Imagineering. As
          a concept designer, he worked on projects associated with Disneyland Resort
          Paris, Disneyland Resort Tokyo, Walt Disney World Resort, and of course,
          Disneyland
        </div>
        <div>
          Resort California. His unique paintings of the classic Disney characters were
          discovered by Imagineering President, Marty Sklar, and the rest as they say is
          history. Since then, he has become a best-selling artist in Disney’s theme
          parks, galleries, and stores. Some highlights of his Disney pieces include the
          30th Anniversary of the Haunted Mansion, Disney Decades for Disneyland’s 50th
        </div>
        <div>
          Anniversary, The Pirates of the Caribbean, The Matterhorn painting [tribute to
          Herbie Ryman], and The original Twilight Zone Tower of Terror. Besides the Walt
          Disney Company, Eric has also worked as a consultant for Universal Studios and
          Warner Bros. His list of credits also includes the Vans World Cup of Surfing in
          Hawaii, NASA, and more. In 2001, Eric was commissioned by Disneyland to create
          100 Mickey Mouse portraits for Disneyland’s 100th birthday of Walt. This exhibit
        </div>
        <div>
          opened in 2002 and sold out in 3 weeks. Following up on the 100 Mickeys’ success
          was his interpretations of 50 Donald Ducks for the grand opening of the New York
          Disney store on 5th Avenue. Eric’s latest Disney project has been the 5th
          Anniversary painting for the Disney Aulani Resort in Hawaii. He works out of two
          studios; one in Hawaii and the other in the French West Indies. His fine art
          expressionistic pieces have found international attention in France, Asia,
        </div>
        <div>
          Indonesia, Germany, and Los Angeles. In addition to his world-renowned art, Eric
          is President and CEO of Imagiboom Entertainment LLC in Hawaii. In 2019, Eric
          directed, wrote, and created all the visuals for his short film, The Hollow
          Moon. For this experimental film, he painted over 400 originals scenes that were
          blended with stop motion and experimental movements in animation. In 2019, The
          Hollow Moon won 12 awards internationally for Best Experimental Film.
        </div>
      </pre>
      <div>Links</div>
      <div>Links1</div>
      <div>Links2</div>
      <div>Links3</div>
    </div>
  );
}
