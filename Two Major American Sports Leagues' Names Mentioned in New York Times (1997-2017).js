// You can reproduce this figure in plotly.js with the following code!

// Learn more about plotly.js here: https://plot.ly/javascript/getting-started

/* Here's an example minimal HTML template
 *
 * <!DOCTYPE html>
 *   <head>
 *     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
 *   </head>
 *   <body>
 *   <!-- Plotly chart will be drawn inside this div -->
 *   <div id="plotly-div"></div>
 *     <script>
 *     // JAVASCRIPT CODE GOES HERE
 *     </script>
 *   </body>
 * </html>
 */

trace1 = {
  x: [1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017], 
  y: [57, 33, 50, 65, 85, 73, 74, 73, 68, 211, 220, 325, 398, 353, 450, 389, 172, 178, 163, 768, 83], 
  line: {color: 'rgba(31,119,180,1)'}, 
  mode: 'lines', 
  name: 'NFL', 
  type: 'scatter', 
  xaxis: 'x', 
  xsrc: 'Cassie_shen:4:f6f58e', 
  yaxis: 'y', 
  ysrc: 'Cassie_shen:4:4a3f61'
};
trace2 = {
  x: [1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017], 
  y: [37, 29, 58, 65, 73, 60, 49, 57, 60, 101, 77, 107, 84, 89, 93, 100, 57, 64, 90, 380, 47], 
  line: {color: 'rgba(255,127,14,1)'}, 
  mode: 'lines', 
  name: 'NBA', 
  type: 'scatter', 
  xaxis: 'x', 
  xsrc: 'Cassie_shen:4:02a218', 
  yaxis: 'y', 
  ysrc: 'Cassie_shen:4:4dee39'
};
data = [trace1, trace2];
layout = {
  hovermode: 'closest', 
  margin: {
    r: 10, 
    t: 25, 
    b: 40, 
    l: 60
  }, 
  showlegend: true, 
  xaxis: {domain: [0, 1]}, 
  yaxis: {domain: [0, 1]}
};
Plotly.plot('plotly-div', {
  data: data,
  layout: layout
});