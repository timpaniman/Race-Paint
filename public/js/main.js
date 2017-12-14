var racePaint = SpaceHipster || {};

racePaint.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

racePaint.game.state.add('Boot', racePaint.Boot);

racePaint.game.state.add('Preload', racePaint.Preload);
racePaint.game.state.add('MainMenu', racePaint.MainMenu);
racePaint.game.state.add('game', racePaint.game);

racePaint.game.state.start('Boot')//, Phaser.Plugin.StateTransition.Out.SlideLeft, Phaser.Plugin.StateTransition.In.SlideLeft);