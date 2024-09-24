import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DatasetLinkedIcon from '@mui/icons-material/DatasetLinked';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AppsIcon from '@mui/icons-material/Apps';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarRateIcon from '@mui/icons-material/StarRate';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

export const mainListItems = () => {
  const navigate = useNavigate();

  return (
      <React.Fragment>
          <Tooltip title="Dashboard" placement="right">
              <ListItemButton onClick={() => navigate('/dashboard')}>
                  <ListItemIcon>
                      <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
              </ListItemButton>
          </Tooltip>
          <Tooltip title="Projects" placement="right">
              <ListItemButton onClick={() => navigate('/projects')}>
                  <ListItemIcon>
                      <AppsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Projects" />
              </ListItemButton>
          </Tooltip>
          <Tooltip title="Datasets" placement="right">
              <ListItemButton onClick={() => navigate('/datasets')}>
                  <ListItemIcon>
                      <DatasetLinkedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Datasets" />
              </ListItemButton>
          </Tooltip>
          <Tooltip title="Patients" placement="right">
              <ListItemButton onClick={() => navigate('/patients')}>
                  <ListItemIcon>
                      <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Patients" />
              </ListItemButton>
          </Tooltip>
          <Tooltip title="Visualizations" placement="right">
              <ListItemButton onClick={() => navigate('/visualizations')}>
                  <ListItemIcon>
                      <QueryStatsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Visualizations" />
              </ListItemButton>
          </Tooltip>
      </React.Fragment>
  );
};

export const secondaryListItems = () => {
  const navigate = useNavigate();

  return (
      <React.Fragment>
          <ListSubheader component="div" inset>
              Saved Projects
          </ListSubheader>
          <Tooltip title="Liked" placement="right">
              <ListItemButton onClick={() => navigate('/liked')}>
                  <ListItemIcon>
                      <FavoriteIcon />
                  </ListItemIcon>
                  <ListItemText primary="Liked" />
              </ListItemButton>
          </Tooltip>
          <Tooltip title="Starred" placement="right">
              <ListItemButton onClick={() => navigate('/starred')}>
                  <ListItemIcon>
                      <StarRateIcon />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
              </ListItemButton>
          </Tooltip>
          <Tooltip title="Project 1" placement="right">
              <ListItemButton onClick={() => navigate('/project-1')}>
                  <ListItemIcon>
                      <BookmarkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Project 1" />
              </ListItemButton>
          </Tooltip>
      </React.Fragment>
  );
};
