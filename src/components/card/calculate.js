/**
 * calculate selected cards status and suit
 * suit, heart, spade, club, diamond
 * value, 1 ... 10 J Q K Ace
 *
 * RULES
 *
 * aces               a, a, a, a           # same value, only Aces                  *10
 * royal flush        a, k, q, j           # in sequence, same suit, A, K, Q, J      *9
 * straight flush     5, 6, 7, 8           # in sequence, same suit                  *8
 * four of a kind     3, 3, 3, 3           # same value                              *5
 * flush              1, 6, 7, 9           # not in sequence, same suit              *7
 * straight           5, 6, 7, 8           # in sequence, different suit             *6
 * three of a kind    a, a, a, k           # 3 with the same suit                    *4
 * two pair           a, a, k, k           # 2 pair with same value                  *3
 * pair               a, a, k, 3           # 1 pair with same value                  *2
 * high card          a, k, q, 7           # random cards, highest value             *1
 *
 *
 */

// generate function that calculate selected cards

export function calculateSelectedCards(selectedCards) {
  const isAces = allCardsAreAce(selectedCards);
  const isRoyalFlush = allCardsHaveSameSuit(selectedCards);
  const isStraightFlush = areCardsInOrderWithSameSuit(selectedCards);
  const isFlush = areCardsSameSuit(selectedCards);
  const isStraight = areCardsInOrderWithDifferentSuits(selectedCards);
  const isFourOfAKind = areCardsSameValue(selectedCards);
  const isThreeOfAKind = hasAtLeastThreeSameValue(selectedCards);
  const isTwoPair = hasAtLeastTwoPairs(selectedCards);
  const isPair = hasAtLeastOnePair(selectedCards);
  const isHighCard = isHigherCard(selectedCards);

  return {
    isAces,
    isRoyalFlush,
    isStraightFlush,
    isFlush,
    isStraight,
    isFourOfAKind,
    isThreeOfAKind,
    isTwoPair,
    isPair,
    isHighCard,
  };
}

function allCardsAreAce(selectedCards) {
  // Verifica se o array tem exatamente 4 cartas
  if (selectedCards.length !== 4) {
    return false;
  }
  // Verifica se todas as cartas têm o valor 14
  return selectedCards.every((card) => card.value === 14);
}

function allCardsHaveSameSuit(selectedCards) {
  const validValues = [14, 13, 12, 11]; // Valores a serem validados

  // Verificar se todos os valores estão presentes
  const values = selectedCards.map((card) => card.value);
  const suits = selectedCards.map((card) => card.suit);
  // Verifica se todos os valores necessários estão presentes
  const hasAllValues = validValues.every((value) => values.includes(value));
  // Verifica se todas as cartas têm o mesmo naipe
  const allSameSuit = suits.every((suit) => suit === suits[0]);
  return hasAllValues && allSameSuit;
}

function areCardsInOrderWithSameSuit(selectedCards) {
  if (selectedCards.length < 3) {
    return false; // Não há cartas suficientes para verificar a ordem
  }
  // Verifica se todas as cartas têm o mesmo naipe
  const sameSuit = selectedCards.every(
    (card) => card.suit === selectedCards[0].suit
  );
  if (!sameSuit) {
    return false; // Se os naipes forem diferentes, retorna falso
  }
  // Verifica se os valores estão em ordem crescente
  const inOrder = selectedCards.every((card, index) => {
    if (index === 0) return true; // O primeiro item sempre está "em ordem"
    return card.value === selectedCards[index - 1].value + 1; // Verifica se o valor atual é igual ao anterior + 1
  });

  return inOrder;
}

function areCardsSameSuit(selectedCards) {
  if (selectedCards.length < 4) {
    return false; // Não há cartas para verificar
  }
  // Verifica se todas as cartas têm o mesmo naipe
  const sameSuit = selectedCards.every(
    (card) => card.suit === selectedCards[0].suit
  );

  return sameSuit;
}

function areCardsInOrderWithDifferentSuits(selectedCards) {
  if (selectedCards.length < 3) {
    return false; // Não há cartas suficientes para verificar a ordem
  }
  // Ordena as cartas pelo valor
  const sortedCards = [...selectedCards].sort((a, b) => a.value - b.value);
  // Verifica se os valores estão em ordem crescente
  const inOrder = sortedCards.every((card, index) => {
    if (index === 0) return true; // O primeiro item sempre está "em ordem"
    return card.value === sortedCards[index - 1].value + 1;
  });

  return inOrder;
}

function areCardsSameValue(selectedCards) {
  if (selectedCards.length !== 4) {
    return false; // A condição exige exatamente 4 cartas
  }
  // Verifica se todas as cartas têm o mesmo valor
  const sameValue = selectedCards.every(
    (card) => card.value === selectedCards[0].value
  );

  return sameValue;
}

function hasAtLeastThreeSameValue(selectedCards) {
  if (selectedCards.length < 3) {
    return false; // A condição exige pelo menos 3 cartas
  }
  // Cria um objeto para contar as ocorrências de cada valor
  const valueCounts = {};
  selectedCards.forEach((card) => {
    valueCounts[card.value] = (valueCounts[card.value] || 0) + 1;
  });
  // Verifica se algum valor aparece pelo menos 3 vezes
  return Object.values(valueCounts).some((count) => count >= 3);
}

function hasAtLeastTwoPairs(selectedCards) {
  if (selectedCards.length !== 4) {
    return false; // A condição exige exatamente 4 cartas
  }
  // Cria um objeto para contar as ocorrências de cada valor
  const valueCounts = {};
  selectedCards.forEach((card) => {
    valueCounts[card.value] = (valueCounts[card.value] || 0) + 1;
  });
  // Conta quantos valores aparecem exatamente 2 vezes
  const pairs = Object.values(valueCounts).filter((count) => count === 2);

  // Verifica se há pelo menos 2 pares
  return pairs.length >= 2;
}

function hasAtLeastOnePair(selectedCards) {
  if (selectedCards.length < 2) {
    return false; // A condição exige pelo menos 2 cartas para haver um par
  }
  // Cria um objeto para contar as ocorrências de cada valor
  const valueCounts = {};
  selectedCards.forEach((card) => {
    valueCounts[card.value] = (valueCounts[card.value] || 0) + 1;
  });
  // Verifica se há algum valor que aparece pelo menos 2 vezes
  return Object.values(valueCounts).some((count) => count >= 2);
}

// function que verifica se tem pelo menos uma carta e verifica o maior value
function isHigherCard(selectedCards) {
  if (selectedCards.length === 0) return false;
  // FIXME: verificar se as outras condições não atendem e retornar o maior valor da carta
  const sortedCards = [...selectedCards].sort((a, b) => a.value - b.value);
  if (sortedCards.length > 0) {
    return sortedCards[sortedCards.length - 1].value;
  }

  return false;
}

// ordenar cartas pelo naipe e depois pelo valor

export function sortingCards(cards) {
  return cards.sort((a, b) => {
    if (a.suit === b.suit) {
      return a.value - b.value;
    } else {
      return sortingSuits(a.suit, b.suit);
    }
  });
}

function sortingSuits(suitA, suitB) {
  const suits = ["spades", "hearts", "diamonds", "clubs"];
  return suits.indexOf(suitA) - suits.indexOf(suitB);
}

// validar a pontuação do jogo
export const calculateHandRanking = (handRanking, setHRMessage) => {
  if (!handRanking) return;
  for (const [key, value] of Object.entries(handRanking)) {
    if (value) {
      if (key === "isAces") {
        setHRMessage("Aces " + 10 + " points.");
        return;
      }
      if (key === "isRoyalFlush") {
        setHRMessage("Royal Flush " + 9 + " points.");
        return;
      }
      if (key === "isStraightFlush") {
        setHRMessage("Straight Flush " + 8 + " points.");
        return;
      }
      if (key === "isFlush") {
        setHRMessage("Flush " + 7 + " points.");
        return;
      }
      if (key === "isStraight") {
        setHRMessage("Straight " + 6 + " points.");
        return;
      }
      if (key === "isFourOfAKind") {
        setHRMessage("Four of a Kind " + 5 + " points.");
        return;
      }
      if (key === "isThreeOfAKind") {
        setHRMessage("Three of a Kind " + 4 + " points.");
        return;
      }
      if (key === "isTwoPair") {
        setHRMessage("Two Pair " + 3 + " points.");
        return;
      }
      if (key === "isPair") {
        setHRMessage("Pair " + 2 + " points.");
        return;
      }
      if (key === "isHighCard") {
        setHRMessage("High Card " + 1 + " point.");
        return;
      }
    }
  }
};
