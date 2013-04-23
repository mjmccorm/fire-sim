var effects = { 
    
      smoke: {
        shape: 'circle',
        velocity: new Vector({y: -0.35}),
        xVariance: 10,
        yVariance: 15,
        spawnSpeed: 1,
        generations: 100000,
        maxParticles: 5000,
        size: 16,
        sizeVariance: 10,
        life: 350,
        lifeVariance: 50,    
        direction: 0,
        directionVariance: 25,
        color: '#ccc',
        opacity: 1,
        onDraw: function(p) {
          p.opacity = 0.251 - (p.age / p.life) * 0.25;
        }
      },

      steam: {
        shape: 'circle',
        velocity: new Vector({y: -0.35}),
        xVariance: 10,
        yVariance: 15,
        spawnSpeed: 1,
        generations: 100000,
        maxParticles: 5000,
        size: 16,
        sizeVariance: 10,
        life: 350,
        lifeVariance: 50,    
        direction: 0,
        directionVariance: 25,
        color: '#fff',
        opacity: 1,
        onDraw: function(p) {
          p.opacity = 0.251 - (p.age / p.life) * 0.25;
        }
      },
      
      explosions: {
        shape: 'square',
        velocity: new Vector({y: -1}),
        xVariance: 5,
        yVariance: 5,
        spawnSpeed: 20,
        generations: 100000,
        maxParticles: 200,
        size: 2,
        sizeVariance: 0.5,
        life: 150,
        lifeVariance: 0,    
        direction: 0,
        directionVariance: 180,
        color: '#fff',
        opacity: 1,
        onDraw: function() {}  
      },
      
      fountain: {
        shape: 'circle',
        velocity: new Vector({x: 0, y: -5}),
        xVariance: 0,
        yVariance: 0,
        spawnSpeed: 5,
        generations: 100000,
        maxParticles: 500,
        size: 8,
        sizeVariance: 6,
        life: 100,
        lifeVariance: 0,    
        direction: 0,
        directionVariance: 15,
        color: '#cef',
        opacity: 1,
        onDraw: function(p) {
          p.v.add(new Vector({y: 0.1}));
          p.opacity = 1 - (p.age / p.life * 0.9);
        }
      },

      hazmat: {
        shape: 'circle',
        velocity: new Vector({x: 0, y: -1.49}),
        xVariance: 0,
        yVariance: 0,
        spawnSpeed: 5,
        generations: 100000,
        maxParticles: 500,
        size: 8,
        sizeVariance: 6,
        life: 100,
        lifeVariance: 0,    
        direction: 0,
        directionVariance: 15,
        color: '#7EB314',
        opacity: 1,
        onDraw: function(p) {
          p.v.add(new Vector({y: 0.1}));
          p.opacity = 1 - (p.age / p.life * 0.9);
        }
      },
      
      fire: {
        shape: 'circle',
        velocity: new Vector({y: -2}),
        xVariance: 5,
        yVariance: 5,
        spawnSpeed: 25,
        generations: 100000,
        maxParticles: 200,
        size: 20,
        sizeVariance: 10,
        life: 30,
        lifeVariance: 30,    
        direction: 0,
        directionVariance: 15,
        color: '#cef',
        opacity: 1,
        onDraw: function(p) {
          var y = -this.age * 3;
          p.size *= 0.98;
          p.color = 'rgb(255, ' + (y + 255) + ', 68)';
          p.opacity = 0.5 - (p.age / p.life * 0.4);
        }
      },
      
      raindrops: {
        shape: 'circle',
        velocity: new Vector({y: 0}),
        xVariance: 200,
        yVariance: 200,
        spawnSpeed: 1,
        generations: 100000,
        maxParticles: 100,
        size: 20,
        sizeVariance: 10,
        life: 50,
        lifeVariance: 10,    
        direction: 0,
        directionVariance: 15,
        color: '#cef',
        opacity: 1,
        onDraw: function(p) {
          p.size *= 0.98;
          p.opacity = 0.5 - (p.age / p.life * 0.4);
        }
      },

      snow: {
        shape: 'circle',
        velocity: new Vector({y: 0}),
        xVariance: 200,
        yVariance: 200,
        spawnSpeed: 1,
        generations: 100000,
        maxParticles: 100,
        size: 20,
        sizeVariance: 10,
        life: 50,
        lifeVariance: 10,    
        direction: 0,
        directionVariance: 15,
        color: '#fff',
        opacity: 1,
        onDraw: function(p) {
          p.size *= 0.98;
          p.opacity = 0.5 - (p.age / p.life * 0.4);
        }
      }
      
    }; //end of effects
  
