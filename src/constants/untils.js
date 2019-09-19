export const generateConstantsAction = (actionKey) => ({
  [actionKey]: actionKey,
  [`${actionKey}_SUCCESS`]: `${actionKey}_SUCCESS`,
  [`${actionKey}_ERROR`]: `${actionKey}_ERROR`,
});
