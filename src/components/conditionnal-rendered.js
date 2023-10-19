const ConditionnalRendered = ({ condition, children }) => {
    if (condition) return children;
    return null;
};

export default ConditionnalRendered