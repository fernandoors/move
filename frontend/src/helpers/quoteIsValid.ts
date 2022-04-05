export default function quoteIsValid(quote: Quote): boolean {
  if (!quote.date_to_move || !quote.status) {
    return false;
  }

  const hasUserData = !!quote.user.email && !!quote.user.name;
  if (!hasUserData) {
    return false;
  }

  const hasAddresses = quote.location.from_address && quote.location.to_address;
  if (!hasAddresses) {
    return false;
  }

  const hasFromPositions =
    quote.location.from_position.lat && quote.location.from_position.lng;
  const hasToPositions =
    quote.location.to_position.lat && quote.location.to_position.lng;
  if (!hasFromPositions && !hasToPositions) {
    return false;
  }

  const hasVolumes =
    quote.volumes.length &&
    quote.volumes.every(
      (volume) =>
        volume.description && volume.weight && volume.width && volume.length
    );
  if (!hasVolumes) {
    return false;
  }

  return true;
}
