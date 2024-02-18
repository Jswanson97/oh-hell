import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2>Card Game Rules</h2>
        <p>Oh Hell, or Estimation, is a trick taking game for three to seven players. Oh Hell requires a standard 52 playing card deck with Aces high and 2s low. This game is suitable for ages 10 and up. The objective of Oh Hell is to win the exact number of tricks bid.</p>
        <h2>Set up</h2>
        <p>To set up a game of Oh Hell, players sit around a stable gameplay area. Before gameplay can begin, each player draws a card from a shuffled deck. The player with the highest card becomes the first dealer. Ties are broken by a redraw. The dealer then shuffles the decks and passes out cards to each player. For a game of three to five players, the dealer passes out 10 cards. For six players, the dealer passes out 8 cards. For seven players, the dealer passes out 7 cards. The remaining deck becomes the stock. The top card of the stock is flipped over and placed on top of the stock. The suit of the card is the trump suit for the round. </p>
        <h2>How to play</h2>
        <p>Beginning with the player left of the dealer and going clockwise, players make a bid as to how many tricks they believe they can take. Player cannot pass but can bid zero, believing they will not make any tricks. The dealer must not bid the maximum number of bids possible
            The player left of the dealer leads the first trick and play moves clockwise. Players must follow the lead suit if possible. The highest card wins the trick.</p>
        <h2>Scoring</h2>
        <p>If a player makes the exact number of tricks they bid, they receive 10 points plus the number of tricks bid. If a player makes under or over the number of tricks they bid, they receive 0 points.
            Gameplay continues indefinitely with the dealer position rotating clockwise after every round.</p>
      </div>
    </div>
  );
}

export default AboutPage;
