import React from 'react'

import { Section, SectionInner } from '../../components/shared'
import { FormComponent } from '../../components/about-us/form-section/form'

const Form: React.FC = () => {
  return (
      <div className='container'>
        <Section>
          <SectionInner>
            <FormComponent
              style={{marginTop: '1rem'}}
              title={'didn’t find a suitable position for you?'}
              description={(
                <>
                  Our recruitment demand is constantly changing. Drop us a line at <a href={'mailto:ula@bright.dev'}>ula@bright.dev</a>, or submit your CV and we will contact you when a position inline with your competences becomes available.
                </>
              )}
              namePlaceholder={'Enter name here'}
              mailPlaceholder={'name@mail.com'}
              textLabel={'Dream position'}
              textPlaceholder={'Let us know what would you like to do @ bright inventions'}
              uploadLabel={'Upload your resume / CV / cover letter / portfolio'}
            />
          </SectionInner>
        </Section>
      </div>
  )
}

export default Form
