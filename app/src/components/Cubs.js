import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';
import Typography from '@material-ui/core/Typography';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const moment = require('moment');

const Cubs = ({ getData, data, isFetching, errors }) => {
  if (isFetching) {
    return (
      <Typography align='center' variant='h4' gutterBottom>
        Fetching Stats...
      </Typography>
    );
  } else {
    return (
      <>
        {data ? (
          <div>
            <Typography align='center' variant='h4' gutterBottom>
              2019 Chicago Cubs Roster
            </Typography>
            <TableContainer component={Paper}>
              <Table aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align='center'>Number</TableCell>
                    <TableCell align='center'>Position</TableCell>
                    <TableCell align='center'>Bats</TableCell>
                    <TableCell align='center'>Throws</TableCell>
                    <TableCell align='center'>Height</TableCell>
                    <TableCell align='center'>Weight</TableCell>
                    <TableCell align='center'>DOB</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((player) => (
                    <TableRow key={player.player_id}>
                      <TableCell component='th' scope='row'>
                        {player.name_display_first_last}
                      </TableCell>
                      <TableCell align='center'>
                        {player.jersey_number}
                      </TableCell>
                      <TableCell align='center'>
                        {player.position_txt}
                      </TableCell>
                      <TableCell align='center'>{player.bats}</TableCell>
                      <TableCell align='center'>{player.throws}</TableCell>
                      <TableCell align='center'>
                        {player.height_feet}' {player.height_inches}"
                      </TableCell>
                      <TableCell align='center'>{player.weight}</TableCell>
                      <TableCell align='center'>
                        {moment(player.birth_date).format('MMM D, YYYY')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ) : null}
        <Button variant='contained' color='primary' onClick={getData}>
          Load Cubs Data
        </Button>
      </>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    errors: state.errors
  };
};

export default connect(mapStateToProps, { getData })(Cubs);
