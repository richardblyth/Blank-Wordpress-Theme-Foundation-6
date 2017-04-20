<?php
get_header(); ?>

      <section>
        <div>
          <h1>We're sorry, we cannot find that page!</h1>
          <p>You're seeing this message because:</p>
          <ul>
            <li>The page may have moved</li>
            <li>The page no longer exists</li>
            <li>The link you clicked is incorrect</li>
          </ul>
  
          <p>Please visit the <a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="Homepage">Homepage</a>.</p>
        </div>
      </section>
  
<?php get_footer(); ?>