import React from 'react';
import { PolicyContainer } from '../Styles/Policy.styled';

function Policy() {
  return (
    <PolicyContainer>
      <h2>USER POLICY</h2>
      <p>
        Welcome to KangoCompress, your online image compression tool. We are committed to providing
        a 100% free and 100% privacy-focused service to offer you an exceptional image compression
        experience. Please read the following User Policy carefully before using our service to
        ensure that you understand and comply with our rules and terms.
      </p>
      <h3>1. User Privacy</h3>
      <p>
        We respect the privacy of our users and do not store, monitor, or share user-uploaded image
        data. We do not require users to provide personal identity information, and you can use our
        service anonymously. Please read our Privacy Policy for more information.
      </p>
      <h3>2. Service Usage Rules</h3>
      <p>
        KangoCompress is intended for lawful purposes only. Users must not use this service for
        illegal activities, including but not limited to copyright infringement or violations of any
        applicable laws. Users must not upload images containing malicious software or viruses, or
        engage in other activities that may harm our servers or other users. We reserve the right to
        refuse service, delete images, or take other appropriate actions against users who violate
        the Service Usage Rules.
      </p>
      <h3>3. Disclaimer</h3>
      <p>
        KangoCompress is not responsible for user-uploaded image data, including data loss or damage
        resulting from the use of our service. Our service is provided as is without any warranties,
        express or implied, including but not limited to merchantability, fitness for a particular
        purpose, and non-infringement.
      </p>
      <h3>4. Service Changes and Termination</h3>
      <p>
        We reserve the right to change, suspend, or terminate KangoCompress services at any time
        without prior notice. Users may refer to our website for the most up-to-date version of the
        User Policy and User Terms.
      </p>
    </PolicyContainer>
  );
}

export default Policy;
