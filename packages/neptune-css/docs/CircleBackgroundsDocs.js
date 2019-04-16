import React from 'react';
import Refractor from 'react-refractor';
import markup from 'refractor/lang/markup';
import css from 'refractor/lang/css';
import './less/prism.css';


const CircleBarckgrounds = () => (
  <section id="circle-backgrounds" className="container container--wide section">
    <h1 className="colored-dot doc-section__title doc-h1">Circle Backgrounds.</h1>

    <p className="lead">Backgrounds are applied to box elements. This could be a grid column, a page width block, or something custom.</p>
    <p>
The
      <strong> size is based on the width </strong>
      {' '}
of the container. It is slightly larger than the container to make sure content has a background.
    </p>
    <h2 className="doc-h2 doc-section__subtitle" id="circle-bg-default">
Defaults
    </h2>
    <p>
By default it is
      <strong> centered both vertically and horizontally </strong>
      {' '}
on the box and
      <strong> not clipped </strong>
      {' '}
by the edge of the box.
    </p>


      <div className="row">
        <div className="col-xs-4 col-sm-offset-4">
          <div className="circle-bg circle-bg-margin">
            <h3>Default circle</h3>
          </div>
        </div>
      </div>

      <Refractor
        language="markup"
        value={`
          <div class="circle-bg">
              ...
            </div>
         `}
      />

    <h2 className="doc-h2 doc-section__subtitle" id="circle-bg-sizes">
Sizes
    </h2>
    <p>Size modifiers do not move the centre of the circle, they just alter the size.</p>
    <p>Example logic:</p>
    <ul>
      <li><strong> xs</strong>: 0.25 * width</li>
      <li><strong> sm</strong>: 0.5 * width</li>
      <li><strong> md</strong>: 1.2 * width (default)</li>
      <li><strong> lg</strong>: 2 * width</li>
      <li><strong> xl</strong>: 4 * width</li>
    </ul>
      <div className="row ">
        <div className="col-xs-4">
          <div className="doc-box-dashed circle-bg circle-bg-xs circle-bg-margin">
            <h3>xs</h3>
          </div>
        </div>
        <div className="col-xs-4">
          <div className="doc-box-dashed circle-bg circle-bg-sm circle-bg-margin">
            <h3>sm</h3>
          </div>
        </div>
        <div className="col-xs-4">
          <div className="doc-box-dashed circle-bg circle-bg-md circle-bg-margin">
            <h3>md</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4 col-xs-offset-4">
          <div className="circle-bg circle-bg-lg circle-bg-lg-margin">
            <h3>lg</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4 col-xs-offset-4">
          <div className="circle-bg circle-bg-xl circle-bg-xl-margin">
            <h3>xl</h3>
          </div>
        </div>
      </div>
      <Refractor
        language="markup"
        value={`
          <div class="circle-bg circle-bg-xs">
            ...
          </div>
          <div class="circle-bg circle-bg-sm">
            ...
          </div>
          <div class="circle-bg">
            ...
          </div>
          <div class="circle-bg circle-bg-lg">
            ...
          </div>
          <div class="circle-bg circle-bg-xl">
            ...
          </div>
         `}
      />

    <h2 className="doc-h2 doc-section__subtitle" id="circle-bg-pos-c"> Positions (center) </h2>
    <p>
The centre of the circle is moved just outside the edge of the container box.
    </p>
    <p>We can use modifier classes to choose the edge.</p>
    <ul>
      <li>Top</li>
      <li>Right</li>
      <li>Bottom</li>
      <li>Left</li>
    </ul>
    <p>We can also use these in x/y combinations.</p>

      <div className="row">
        <div className="col-xs-5 col-xs-offset-1">
          <div className="doc-box-dashed circle-bg circle-bg-sm circle-bg-sm-margin circle-bg-top-c">
            <h3>Top</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus minus animi a labore. Ipsam autem similique culpa, optio vero, reiciendis nesciunt, odio, laborum adipisci obcaecati labore dolores quasi.</p>
          </div>
        </div>
        <div className="col-xs-5 col-xs-offset-1">
          <div className="doc-box-dashed circle-bg circle-bg-sm circle-bg-sm-margin circle-bg-right-c">
            <h3>right</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus minus animi a labore. Ipsam autem similique culpa, optio vero, reiciendis nesciunt, odio, laborum adipisci obcaecati labore dolores quasi.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-5 col-xs-offset-1">
          <div className="doc-box-dashed circle-bg circle-bg-sm circle-bg-sm-margin circle-bg-bottom-c">
            <h3>bottom</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus minus animi a labore. Ipsam autem similique culpa, optio vero, reiciendis nesciunt, odio, laborum adipisci obcaecati labore dolores quasi.</p>
          </div>
        </div>
        <div className="col-xs-5 col-xs-offset-1">
          <div className="doc-box-dashed circle-bg circle-bg-sm circle-bg-sm-margin circle-bg-left-c">
            <h3>left</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus minus animi a labore. Ipsam autem similique culpa, optio vero, reiciendis nesciunt, odio, laborum adipisci obcaecati labore dolores quasi.</p>
          </div>
        </div>
      </div>
      <Refractor
        language="markup"
        value={`
          <div class="circle-bg circle-bg-top-c">
            ...
          </div>
          <div class="circle-bg circle-bg-right-c">
            ...
          </div>
          <div class="circle-bg circle-bg-bottom-c">
            ...
          </div>
          <div class="circle-bg circle-bg-left-c">
            ...
          </div>
         `}
      />

    <h2 className="doc-h2 doc-section__subtitle" id="position-(center)-x/y-combinations">
Position (center) x/y combinations
    </h2>
      <div className="row">
        <div className="col-xs-5 col-xs-offset-1 ">
          <div className="doc-box-dashed circle-bg circle-bg-sm circle-bg-top-c circle-bg-left-c circle-bg-sm-margin">
            <h3>top left</h3>
            {' '}
Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
          </div>
        </div>
        <div className="col-xs-5 col-xs-offset-1 ">
          <div className="doc-box-dashed circle-bg circle-bg-sm circle-bg-top-c circle-bg-right-c circle-bg-sm-margin ">
            <h3>Top Right</h3>
            {' '}
Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-5 col-xs-offset-1 ">
          <div className="doc-box-dashed circle-bg circle-bg-sm circle-bg-bottom-c circle-bg-left-c circle-bg-sm-margin">
            <h3>Bottom Left</h3>
            {' '}
Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>
        </div>
        <div className="col-xs-5 col-xs-offset-1 ">
          <div className="doc-box-dashed circle-bg circle-bg-sm circle-bg-bottom-c circle-bg-right-c circle-bg-sm-margin">
            <h3>Bottom Right</h3>
            {' '}
Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>
        </div>
      </div>
      <Refractor
        language="markup"
        value={`
          <div class="circle-bg circle-bg-top-c circle-bg-left-c">
            ...
          </div>
          <div class="circle-bg circle-bg-top-c circle-bg-right-c">
            ...
          </div>
          <div class="circle-bg circle-bg-bottom-c circle-bg-left-c">
            ...
          </div>
          <div class="circle-bg circle-bg-bottom-c circle-bg-top-c">
            ...
          </div>
         `}
      />

    <h2 className="doc-h2 doc-section__subtitle" id="circle-bg-pos">
Position (box edge)
    </h2>
    <p>
The
      <strong>edge of the circle</strong>
      {' '}
is moved just outside of the edge of the container box.
    </p>
    <p>Modifiers:</p>
    <ul>
      <li>Top</li>
      <li>Right</li>
      <li>Bottom</li>
      <li>Left</li>
    </ul>
    <p>We can also use these in x/y combinations.</p>

      <div className="row">
        <div className="col-xs-4 col-xs-offset-1">
          <div className="doc-box-dashed circle-bg circle-bg-top circle-bg-margin">
            <h3>Top</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus</p>
          </div>
        </div>
        <div className="col-xs-4 col-xs-offset-3">
          <div className="doc-box-dashed circle-bg circle-bg-right circle-bg-margin">
            <h3>Right</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4 col-xs-offset-1">
          <div className="doc-box-dashed circle-bg circle-bg-bottom circle-bg-margin">
            <h3>Bottom</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus</p>
          </div>
        </div>
        <div className="col-xs-4 col-xs-offset-3">
          <div className="doc-box-dashed circle-bg circle-bg-left circle-bg-margin">
            <h3>Left</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus minus animi a labore. Ipsam autem similique culpa, optio vero, reiciendis nesciunt, odio, laborum adipisci obcaecati labore dolores quasi.</p>
          </div>
        </div>
      </div>
      <Refractor
        language="markup"
        value={`
          <div class="circle-bg circle-bg-top">
              ...
            </div>
            <div class="circle-bg circle-bg-right">
              ...
            </div>
            <div class="circle-bg circle-bg-bottom">
              ...
            </div>
            <div class="circle-bg circle-bg-left">
              ...
            </div>
         `}
      />

    <h2 className="doc-h2 doc-section__subtitle" id="position-(box-edge)-x/y-combinations">
Position (box edge) x/y combinations
    </h2>
      <div className="row m-b-5">
        <div className="col-xs-4 col-xs-offset-1">
          <div className="doc-box-dashed circle-bg circle-bg-sm circle-bg-top circle-bg-left">
            <h3>Top Left</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt voluptas, cupiditate et blanditiis hic, alias consectetur </p>
          </div>
        </div>
        <div className="col-xs-4 col-xs-offset-3">
          <div className="doc-box-dashed circle-bg circle-bg-sm circle-bg-top circle-bg-right">
            <h3>Top Right</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt voluptas, cupiditate et blanditiis hic, alias consectetur </p>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-xs-4 col-xs-offset-1">
          <div className="doc-box-dashed circle-bg circle-bg-sm circle-bg-bottom circle-bg-left">
            <h3>Bottom Left</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt voluptas, cupiditate et blanditiis hic, alias consectetur </p>
          </div>
        </div>
        <div className="col-xs-4 col-xs-offset-3">
          <div className="doc-box-dashed circle-bg circle-bg-sm circle-bg-bottom circle-bg-right">
            <h3>Bottom Right</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt voluptas, cupiditate et blanditiis hic, alias consectetur </p>
          </div>
        </div>
      </div>
      <Refractor
        language="markup"
        value={`
          <div class="circle-bg circle-bg-top circle-bg-left">
            ...
          </div>
          <div class="circle-bg circle-bg-top circle-bg-right">
            ...
          </div>
          <div class="circle-bg circle-bg-bottom circle-bg-left">
            ...
          </div>
          <div class="circle-bg circle-bg-bottom circle-bg-right">
            ...
          </div>
         `}
      />

    <h2 className="doc-h2 doc-section__subtitle" id="circle-bg-size-pos">
Size and positions
    </h2>
    <p>We can use these together for different effects. </p>

      <div className="row ">
        <div className="col-xs-4">
          <div className="doc-box-dashed circle-bg circle-bg-xs circle-bg-top circle-bg-right circle-bg-sm-margin">
            <h3>xs top right</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus minus animi ad omnis esse accusantium harum veniam, ex in numquam accusamus commodi suscipit corrupti modi illum est quod.</p>
          </div>
        </div>
        <div className="col-xs-4">
          <div className="doc-box-dashed circle-bg circle-bg-sm circle-bg-bottom circle-bg-right circle-bg-sm-margin">
            <h3>sm bottom right</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus minus animi a labore. Ipsam autem similique culpa, optio vero, reiciendis nesciunt, odio, laborum adipisci obcaecati labore dolores quasi.</p>
          </div>
        </div>
        <div className="col-xs-4">
          <div className="doc-box-dashed circle-bg circle-bg-bottom circle-bg-left circle-bg-sm-margin">
            <h3>md bottom left</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus minus animi a labore. Ipsam autem similique culpa, optio vero, reiciendis nesciunt, odio, laborum adipisci obcaecati labore dolores quasi.</p>
          </div>
        </div>
        <Refractor
          language="markup"
          value={`
            <div class="circle-bg circle-bg-xs circle-bg-top circle-bg-right">
                ...
              </div>
              <div class="circle-bg circle-bg-sm circle-bg-bottom circle-bg-right">
                ...
              </div>
              <div class="circle-bg circle-bg-bottom circle-bg-left">
                ...
              </div>
           `}
        />

      <p>If we want to mostly cover the background of the box, but with an offset style, we could use the lg variant (2x width) and side positioning.</p>

        <div className="row">
          <div className="col-xs-4 col-xs-offset-4">
            <div className="doc-box-dashed circle-bg circle-bg-lg circle-bg-bottom circle-bg-left circle-bg-xl-margin-top">
              <h3>lg bottom left</h3>
              <p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quisquam velit perferendis sed. Et consectetur repudiandae dolore quibusdam unde ea, assumenda id non consequuntur, minima ducimus. Eos iure atque voluptatem culpa sunt fugiat
              modi doloribus vitae aliquid illo reiciendis et
                {' '}
              </p>
            </div>
          </div>
        </div>
        <Refractor
          language="markup"
          value={`
            <div class="circle-bg circle-bg-lg circle-bg-bottom circle-bg-left">
              ...
            </div>

           `}
        />

        <div className="row">
          <div className="col-xs-4 col-xs-offset-4">
            <div className="doc-box-dashed circle-bg circle-bg-xl circle-bg-left circle-bg-xl-margin">
              <h3>xl left</h3>
              {' '}
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos consequatur repellat nihil eaque doloribus assumenda accusantium laborum perferendis amet suscipit. Fugiat fuga amet beatae id eaque sapiente, ipsa assumenda soluta, ex dolorum.
            </div>
          </div>
        </div>
        <Refractor
          language="markup"
          value={`
            <div class="circle-bg circle-bg-xl circle-bg-left">
                  ...
            </div>
           `}
        />


    </div>
    <h2 className="doc-h2 doc-section__subtitle" id="circle-bg-clip">
Clipping boxes
    </h2>
    <p>Sometime we want to clip the circle, we should do this with a clipping box at a higher level.</p>
      <div className="row circle-bg-clip doc-box-dashed">
        <div className="col-xs-6 m-t-5 m-b-5">
        Clip
        </div>
        <div className="col-xs-6 m-t-5 m-b-5">
          <div className="doc-box-dashed circle-bg circle-bg-lg circle-bg-left">
          lg left
          </div>
        </div>
      </div>
      <Refractor
        language="markup"
        value={`
          <div class="circle-bg-clip">
            <div class="col-xs-6">
              Clip
            </div>
            <div class="col-xs-6">
              <div class="circle-bg circle-bg-lg circle-bg-left">
                lg left
              </div>
            </div>
          </div>
         `}
      />
    <h2 className="doc-h2 doc-section__subtitle" id="circle-bg-colour">
Colours
    </h2>
    <p>We need several colour modifiers for our regular background colours:</p>
    <ul>
      <li>Light grey (for use on white)</li>
      <li>Light blue (for use on white)</li>
      <li>Dark navy blue (for use on light navy blue)</li>
      <li>Light navy blue (for use on white)</li>
    </ul>
      <div className="row">
        <div className="col-xs-4 col-xs-offset-1">
          <div className="row circle-bg-clip doc-box-dashed">
            <div className="col-xs-6 m-t-5 m-b-5">
            Some text
            </div>
            <div className="col-xs-6 m-t-5 m-b-5">
              <div className="doc-box-dashed circle-bg circle-bg-lg circle-bg-left">
              Default color
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-4 col-xs-offset-2">
          <div className="row circle-bg-clip doc-box-dashed">
            <div className="col-xs-6 m-t-5 m-b-5">
            Some text
            </div>
            <div className="col-xs-6 m-t-5 m-b-5">
              <div className="circle-bg circle-bg-light-blue circle-bg-lg circle-bg-left">
              Light blue
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-t-5">
        <div className="col-xs-4 col-xs-offset-1">
          <div className="row circle-bg-clip doc-box-dashed">
            <div className="col-xs-6 m-t-5 m-b-5">
            Some text
            </div>
            <div className="col-xs-6 m-t-5 m-b-5">
              <div className="circle-bg circle-bg-blue circle-bg-lg circle-bg-left">
              Navy blue
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-4 col-xs-offset-2">
          <div className="row circle-bg-clip doc-box-dashed">
            <div className="col-xs-6 m-t-5 m-b-5">
            Some text
            </div>
            <div className="col-xs-6 m-t-5 m-b-5">
              <div className="circle-bg circle-bg-navy circle-bg-lg circle-bg-left">
              Dark navy blue
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-t-5">
        <div className="col-xs-4 col-xs-offset-1">
          <div className="row circle-bg-clip doc-box-dashed bg-primary low-z-index">
            <div className="col-xs-6 m-t-5 m-b-5">
            Navy blue
            </div>
            <div className="col-xs-6 m-t-5 m-b-5">
              <div className="circle-bg circle-bg-navy circle-bg-lg circle-bg-left">
              Dark navy blue
              </div>
            </div>
          </div>
        </div>
      </div>
      <Refractor
        language="markup"
        value={`
          <div class="circle-bg">
            Default color
          </div>
          <div class="circle-bg circle-bg-light-blue">
            Light blue
          </div>
          <div class="circle-bg circle-bg-blue">
            Navy blue
          </div>
          <div class="circle-bg circle-bg-navy">
            Dark navy blue
          </div>
         `}
      />

    <div className="alert alert-info">
    There are available utility clases to control the vertical margin of the circle background element.
      {' '}
    </div>
    <Refractor
      language="css"
      value={`
        .circle-bg-xs-margin
        .circle-bg-sm-margin
        .circle-bg-margin
        .circle-bg-lg-margin
        .circle-bg-xl-margin
       `}
    />


  </section>
);

export default CircleBarckgrounds;
