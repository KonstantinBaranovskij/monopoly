import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

interface Profile {
  id: number;
  avatar: string;
  nickname: string;
  balance: number;
}

interface ProfilesTableProps {
  profiles: Profile[];
}

const ProfilesTable: React.FC<ProfilesTableProps> = ({ profiles }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Аватар</TableCell>
            <TableCell>Никнейм</TableCell>
            <TableCell>Баланс</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {profiles.map((profile) => (
            <TableRow key={profile.id}>
              <TableCell>
                <Avatar src={profile.avatar} alt="Avatar" />
              </TableCell>
              <TableCell>
                <Typography>{profile.nickname}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{profile.balance}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProfilesTable;