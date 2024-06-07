'use client';
import React from 'react';
import {
  Banknote,
  BarChart,
  BookOpen,
  BugIcon,
  Database,
  DatabaseBackup,
  DatabaseZap,
  GoalIcon,
  GroupIcon,
  InfoIcon,
  LayoutDashboard,
  MessageCircle,
  MinusIcon,
  Newspaper,
  PenTool,
  PieChart,
  TicketIcon,
  User2
} from 'lucide-react';

export const links = [
  {
    label: 'dashboard',
    links: [
      {
        label: 'dashboard',
        icon: <LayoutDashboard />,
        href: '/country'
      }
    ]
  },
  {
    label: 'ticketing system',
    links: [
      {
        label: 'Tickets',
        icon: <TicketIcon />,
        href: '/'
      },
      {
        label: 'Comments',
        icon: <MessageCircle />,
        href: '/'
      },
      {
        label: 'Migration Mgmt',
        icon: <Database />,
        href: '/',
        links: [
          {
            label: 'Third party Types',
            icon: <DatabaseBackup />,
            href: '/'
          },
          {
            label: 'Migration Management',
            icon: <DatabaseZap />,
            href: '/'
          }
        ]
      }
    ]
  },
  {
    label: 'project management system',
    links: [
      {
        label: 'Accounting management',
        icon: <Database />,
        href: '/',
        links: [
          {
            label: 'client details',
            icon: <User2 />,
            href: ''
          }
        ]
      },
      {
        label: 'Training management',
        icon: <BookOpen />,
        href: '/',
        links: [
          {
            label: 'Training Group Time',
            href: '/',
            icon: <GroupIcon />
          },
          {
            label: 'Training Manage',
            href: '/',
            icon: <PenTool />
          },
          {
            label: 'Training Details',
            href: '/',
            icon: <InfoIcon />
          },
          {
            label: 'Training Group Time',
            href: '/',
            icon: <GroupIcon />
          }
        ]
      },
      {
        label: 'Projects',
        href: '/',
        icon: <GoalIcon />
      },
      {
        label: 'Issue Tracker',
        href: '/',
        icon: <BugIcon />,
        links: [
          {
            label: 'Issue Types',
            href: '/',
            icon: <MinusIcon />
          },
          {
            label: 'Issue Trackers',
            href: '/',
            icon: <MinusIcon />
          }
        ]
      },
      {
        label: 'Client Enrollment ',
        href: '/',
        icon: <Newspaper />,
        links: [
          {
            label: 'Bank Name',
            href: '/',
            icon: <Banknote />
          },
          {
            label: 'Service Type',
            href: '/',
            icon: <MinusIcon />
          },
          {
            label: 'Service Type Option',
            href: '/',
            icon: <MinusIcon />
          }
        ]
      }
    ]
  },
  {
    label: 'human resource management',
    links: [
      {
        label: 'reports',
        href: '/',
        icon: <BarChart />
      },
      {
        label: 'Source data',
        href: '/',
        icon: <PieChart />
      }
    ]
  }
];
