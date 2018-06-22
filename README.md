# compose-react
> Compose the higher order functions that wrap React components. 


## Install

```bash
npm i -S compose-react
```

## Usage

```js
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import compose from 'compose-react';

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing.unit
  }
});

const Button = ({ isFetching, classes }) => {
  return (
    <div className={classes.container}>
      <input disabled={isFetching} type="button" value="Click me!" />
    </div>
  );
};

const mapStateToProps = state => ({
  isFetching: state.isFetching
});

export default compose(
  withStyles(styles),
  withRouter,
  connect(mapStateToProps)
)(Button);

```

## License

[MIT](http://vjpr.mit-license.org)
