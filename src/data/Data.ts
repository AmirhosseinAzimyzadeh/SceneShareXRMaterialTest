enum MaterialType {
  SOLID = 0,
  GLASSY_WIREFRAME = 1,
  EDGE_HIGHLIGHT = 2,
  UNITY_DEFAULT = 3,
}

const Data = {
  conditions: [
    {
      name: 'C105',
      types: {
        [MaterialType.SOLID] : '/videos/C105_solid.mp4',
        [MaterialType.GLASSY_WIREFRAME] : '/videos/C105_glassy_wireframe.mp4',
        [MaterialType.EDGE_HIGHLIGHT] : '/videos/C105_edge_highlight.mp4',
        [MaterialType.UNITY_DEFAULT] : '/videos/C105_unity_default.mp4',
      },
      questions: [
        {
          q: '',
          a: undefined,
        },
        {
          q: 'Click on the area where you think a bed is placed.',
          a: null,
        },
        {
          q: 'Click on the area where you think a door exists.',
          a: null,
        },
        {
          q: 'Click on the area where you think a desk is located.',
          a: null,
        },
        {
          q: 'How many chairs or sofas are in this room?',
          a: '2',
        },
        {
          q: 'Considering the size of the walkable area, how many people do you think can stand inside the room?',
          a: '--',
        },
        {
          q: '',
          a: undefined,
        },
      ],
    },
    {
      name: 'C102',
      types: {
        [MaterialType.SOLID] : '/videos/C102_solid.mp4',
        [MaterialType.GLASSY_WIREFRAME] : '/videos/C102_glassy_wireframe.mp4',
        [MaterialType.EDGE_HIGHLIGHT] : '/videos/C102_edge_highlight.mp4',
        [MaterialType.UNITY_DEFAULT] : '/videos/C102_unity_default.mp4',
      },
      questions: [
        {
          q: '',
          a: undefined,
        },
        {
          q: 'Click on an area that you think a bed is placed.',
          a: null,
        },
        {
          q: 'Click on an area that you think a book shelf is located.',
          a: null,
        },
        {
          q: 'Click on an area that you a TV might be located.',
          a: null,
        },
        {
          q: 'How many chairs can you identify in the room?',
          a: '0',
        },
        {
          q: 'Considering the size of the walkable area, how many people do you think can fit inside the room standing?',
          a: '12',
        },
        {
          q: '',
          a: undefined,
        },
      ],
    },
    {
      name: 'C103',
      types: {
        [MaterialType.SOLID] : '/videos/C103_solid.mp4',
        [MaterialType.GLASSY_WIREFRAME] : '/videos/C103_glassy_wireframe.mp4',
        [MaterialType.EDGE_HIGHLIGHT] : '/videos/C103_edge_highlight.mp4',
        [MaterialType.UNITY_DEFAULT] : '/videos/C103_unity_default.mp4',
      },
      questions: [
        {
          q: '',
          a: undefined,
        },
        {
          q: 'Click on the area where a chair and a desk are close to each other.',
          a: null,
        },
        {
          q: 'Click on the area where a sofa is located.',
          a: null,
        },
        {
          q: 'Click on the area where a bookshelf might be located.',
          a: null,
        },
        {
          q: 'How many doors can you identify in this room?',
          a: '3',
        },
        {
          q: 'Considering the size of the walkable area, how many people do you think can fit inside the room standing?',
          a: '--',
        },
        {
          q: '',
          a: undefined,
        },
      ],
    },
    {
      name: 'C104',
      types: {
        [MaterialType.SOLID] : '/videos/C104_solid.mp4',
        [MaterialType.GLASSY_WIREFRAME] : '/videos/C104_glassy_wireframe.mp4',
        [MaterialType.EDGE_HIGHLIGHT] : '/videos/C104_edge_highlight.mp4',
        [MaterialType.UNITY_DEFAULT] : '/videos/C104_unity_default.mp4',
      },
      questions: [
        {
          q: '',
          a: undefined,
        },
        {
          q: 'Click on the area where you think a bed is placed.',
          a: null,
        },
        {
          q: 'Click on the area where you think a desk is located.',
          a: null,
        },
        {
          q: 'Click on the area where you think a door exists.',
          a: null,
        },
        {
          q: 'How many sitting areas can you identify in this room, excluding beds?',
          a: '2',
        },
        {
          q: 'Considering the size of the walkable area, how many people do you think can fit inside the room standing?',
          a: '--',
        },
        {
          q: '',
          a: undefined,
        },
      ],
    }
  ],
  
}

export { Data, MaterialType };

